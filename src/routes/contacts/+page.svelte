<script lang="ts">
	import { form, field } from 'svelte-forms';
	import { required, email, min } from 'svelte-forms/validators';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { addMessage } from '$lib/db';
	import type { MessageType } from '$lib/interfaces';

	const mail = field('mail', '', [min(1), required(), email()]);
	const subject = field('subject', '', [required()]);
	const emailContent = field('emailContent', '', [required()]);
	let clicked = 0;

	const emailForm = form(mail, subject, emailContent);

	const toastSuccess: ToastSettings = {
		message: 'Email sent successfully!',
		timeout: 7000
	};
	const toastError: ToastSettings = {
		message: 'Error sending email',
		timeout: 7000
	};

	const handleSubmit = async () => {
		clicked += 1;
		emailForm.validate();
		if ($emailForm.dirty && $emailForm.valid) {
			clicked = 0;
			const message: MessageType = {
				email: $mail.value,
				subject: $subject.value,
				content: $emailContent.value
			};
			const { error } = await addMessage(message);
			if (error) {
				toastStore.trigger(toastError);
			} else {
				emailForm.reset();
				toastStore.trigger(toastSuccess);
			}
		}
	};
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="w-[80%]">
		<form>
			<h2 class="ms-3 mb-7">Send me an email!</h2>
			<label class="label m-3">
				<span>From</span>
				<input class="input" type="text" placeholder="Your email" bind:value={$mail.value} />
				{#if $emailForm.hasError('mail.required') && clicked > 0}
					<div class="dark:text-error-400 text-error-500">Your email is required</div>
				{/if}
				{#if $emailForm.hasError('mail.not_an_email') && clicked > 0}
					<div class="dark:text-error-400 text-error-500">Write a valid email address</div>
				{/if}
			</label>
			<label class="label m-3">
				<span>Subject</span>
				<input class="input" type="text" placeholder="Subject" bind:value={$subject.value} />
				{#if $emailForm.hasError('subject.required') && clicked > 0}
					<div class="dark:text-error-400 text-error-500">Subject of your email is required</div>
				{/if}
			</label>
			<label class="label m-3">
				<span>Text</span>
				<textarea
					class="textarea rounded-2xl"
					rows="4"
					placeholder="Tell me what you want!"
					bind:value={$emailContent.value}
				/>
				{#if $emailForm.hasError('emailContent.required') && clicked > 0}
					<div class="dark:text-error-400 text-error-500">Don't you want to write me anything?</div>
				{/if}
			</label>
			<button on:click={handleSubmit} class="btn variant-ghost-primary float-right">Send</button>
		</form>
		<Toast />
	</div>
</div>
